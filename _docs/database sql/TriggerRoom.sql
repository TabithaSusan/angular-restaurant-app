Delimiter $$

CREATE TRIGGER roomLimit BEFORE INSERT ON R_gebuchtVon FOR EACH ROW
     BEGIN
        IF (SELECT COUNT(*) from R_gebuchtVon) > 4 THEN
            SET msg = concat('Fehler bei der Raumbuchung ');
            signal sqlstate '45000' SET message_text = msg;
         END IF;
    END $$