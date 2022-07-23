Delimiter $$

CREATE TRIGGER roomLimit BEFORE INSERT ON R_gebuchtVon FOR EACH ROW
     BEGIN
        IF (SELECT COUNT(*) from R_gebuchtVon) > 4 THEN
            set msg = concat('Fehler bei der Raumbuchung ');
            signal sqlstate '45000' set message_text = msg;
         END IF;
    END $$