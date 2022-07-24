Delimiter $$

CREATE TRIGGER orderLimit BEFORE INSERT ON bestellungen FOR EACH ROW
     BEGIN
        IF (SELECT COUNT(*) from bestellungen) > 10 THEN
            SET msg = concat('Die Küche kann leider keine weiteren Bestellungen aufnehmen!');
            signal sqlstate '45000' SET message_text = msg;
         END IF;
    END $$