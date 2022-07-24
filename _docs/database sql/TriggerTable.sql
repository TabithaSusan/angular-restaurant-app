Delimiter $$

CREATE TRIGGER tableLimit BEFORE INSERT ON t_reserviertVon FOR EACH ROW
     BEGIN
        IF (SELECT COUNT(*) from t_reserviertVon) > 10 THEN
            SET msg = concat('Fehler bei der Tischreservierung ');
            signal sqlstate '45000' SET message_text = msg;
         END IF;
    END $$