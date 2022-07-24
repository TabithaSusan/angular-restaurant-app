Delimiter $$

CREATE TRIGGER roomLimit BEFORE INSERT ON R_gebuchtVon FOR EACH ROW
     BEGIN
        IF (SELECT COUNT (Raum_id) from R_gebuchtVon) = 0 THEN
			INSERT INTO R_gebuchtVon (Raum_id, Kunden_id) values (new.Raum_id, new.Kunden_id);
		ELSEIF (SELECT COUNT (Raum_id) from R_gebuchtVon) < 4 THEN
			INSERT INTO R_gebuchtVon (Raum_id, Kunden_id) values (new.Raum_id, new.Kunden_id);
		ELSEIF (SELECT COUNT (Raum_id) from R_gebuchtVon) >= 4 THEN
			set msg = concat('Fehler bei der Raumbuchung ', cast(new.id as char));
			signal sqlstate '45000' set message_text = msg;
         END IF;
    END $$