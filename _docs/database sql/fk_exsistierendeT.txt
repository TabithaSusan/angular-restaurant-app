ALTER TABLE `22_IT_Gruppe1`.`raum` 
ADD COLUMN `veranstaltungs_id` INT NULL AFTER `raum_cost`,
ADD INDEX `belegtVon_idx` (`veranstaltungs_id` ASC);
;
ALTER TABLE `22_IT_Gruppe1`.`raum` 
ADD CONSTRAINT `belegtVon`
  FOREIGN KEY (`veranstaltungs_id`)
  REFERENCES `22_IT_Gruppe1`.`Veranstaltung` (`Veranstaltung_id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;
