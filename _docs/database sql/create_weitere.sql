CREATE TABLE `bestellungen` (
  `bestell_id` INT NOT NULL AUTO_INCREMENT,
  `Preis` DOUBLE NULL,
  `kunden_id` BIGINT(20) UNSIGNED NOT NULL,
  `mitarbeiter_id` BIGINT(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`bestell_id`),
  UNIQUE INDEX `kunden_id_UNIQUE` (`kunden_id` ASC),
  UNIQUE INDEX `mitarbeiter_id_UNIQUE` (`mitarbeiter_id` ASC),
  CONSTRAINT `bestelltvon`
    FOREIGN KEY (`kunden_id`)
    REFERENCES `22_IT_Gruppe1`.`kunden` (`kunden_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `b_aufgennommenvon`
    FOREIGN KEY (`mitarbeiter_id`)
    REFERENCES `22_IT_Gruppe1`.`mitarbeiter` (`mitarbeiter_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

CREATE TABLE `22_IT_Gruppe1`.`Veranstaltung` (
  `Veranstaltung_id` INT NOT NULL,
  `Date` DATE NULL,
  `Bezeichnung` VARCHAR(45) NULL,
  `Teilnehmerzahl` INT NULL,
  `Mitarbeiter_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Veranstaltung_id`),
  UNIQUE INDEX `Mitarbeiter_id_UNIQUE` (`Mitarbeiter_id` ASC),
  CONSTRAINT `v_aufgenommenVon`
    FOREIGN KEY (`Mitarbeiter_id`)
    REFERENCES `22_IT_Gruppe1`.`mitarbeiter` (`mitarbeiter_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);


CREATE TABLE `22_IT_Gruppe1`.`R_gebuchtVon` (
  `Raum_id` BIGINT UNSIGNED NOT NULL,
  `Kunden_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Raum_id`, `Kunden_id`),
  UNIQUE INDEX `Raum_id_UNIQUE` (`Raum_id` ASC),
  UNIQUE INDEX `Kunden_id_UNIQUE` (`Kunden_id` ASC),
  CONSTRAINT `fk_raum_id`
    FOREIGN KEY (`Raum_id`)
    REFERENCES `22_IT_Gruppe1`.`raum` (`raum_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_kunden_id`
    FOREIGN KEY (`Kunden_id`)
    REFERENCES `22_IT_Gruppe1`.`kunden` (`kunden_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

    
CREATE TABLE `22_IT_Gruppe1`.`M_gebuchtVon` (
  `Mitarbeiter_id` BIGINT UNSIGNED NOT NULL,
  `Kunden_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Mitarbeiter_id`, `Kunden_id`),
  UNIQUE INDEX `Mitarbeiter_id_UNIQUE` (`Mitarbeiter_id` ASC),
  UNIQUE INDEX `Kunden_id_UNIQUE` (`Kunden_id` ASC),
  CONSTRAINT `fk_mitarbeiter_id`
    FOREIGN KEY (`Mitarbeiter_id`)
    REFERENCES `22_IT_Gruppe1`.`mitarbeiter` (`mitarbeiter_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_kunden_id_m`
    FOREIGN KEY (`Kunden_id`)
    REFERENCES `22_IT_Gruppe1`.`kunden` (`kunden_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

    
CREATE TABLE `22_IT_Gruppe1`.`G_verwaltetVon` (
  `Mitarbeiter_id` BIGINT UNSIGNED NOT NULL,
  `gericht_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Mitarbeiter_id`, `gericht_id`),
  UNIQUE INDEX `Mitarbeiter_id_UNIQUE` (`Mitarbeiter_id` ASC),
  UNIQUE INDEX `gericht_id_UNIQUE` (`gericht_id` ASC),
  CONSTRAINT `fk_mitarbeiter_id_g`
    FOREIGN KEY (`Mitarbeiter_id`)
    REFERENCES `22_IT_Gruppe1`.`mitarbeiter` (`mitarbeiter_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gericht_id`
    FOREIGN KEY (`gericht_id`)
    REFERENCES `22_IT_Gruppe1`.`gericht` (`gericht_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
    
CREATE TABLE `22_IT_Gruppe1`.`M_verwaltetVon` (
  `Mitarbeiter_id` BIGINT UNSIGNED NOT NULL,
  `menu_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Mitarbeiter_id`, `menu_id`),
  UNIQUE INDEX `Mitarbeiter_id_UNIQUE` (`Mitarbeiter_id` ASC),
  UNIQUE INDEX `menu_id_UNIQUE` (`menu_id` ASC),
  CONSTRAINT `fk_mitarbeiter_id_m`
    FOREIGN KEY (`Mitarbeiter_id`)
    REFERENCES `22_IT_Gruppe1`.`mitarbeiter` (`mitarbeiter_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menu_id`
    FOREIGN KEY (`menu_id`)
    REFERENCES `22_IT_Gruppe1`.`menu` (`menu_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
    
CREATE TABLE `22_IT_Gruppe1`.`enthaeltGericht` (
  `gericht_id` BIGINT UNSIGNED NOT NULL,
  `menu_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`gericht_id`, `menu_id`),
  UNIQUE INDEX `gericht_id_UNIQUE` (`gericht_id` ASC),
  UNIQUE INDEX `menu_id_UNIQUE` (`menu_id` ASC),
  CONSTRAINT `fk_gericht_id_e`
    FOREIGN KEY (`gericht_id`)
    REFERENCES `22_IT_Gruppe1`.`gericht` (`gericht_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menu_id_e`
    FOREIGN KEY (`menu_id`)
    REFERENCES `22_IT_Gruppe1`.`menu` (`menu_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
    
CREATE TABLE `22_IT_Gruppe1`.`enthaeltMenu` (
  `bestell_id` INT NOT NULL,
  `menu_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`bestell_id`, `menu_id`),
  UNIQUE INDEX `menu_id_UNIQUE` (`menu_id` ASC),
  CONSTRAINT `fk_bestell_id`
    FOREIGN KEY (`bestell_id`)
    REFERENCES `22_IT_Gruppe1`.`bestellungen` (`bestell_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menu_id_em`
    FOREIGN KEY (`menu_id`)
    REFERENCES `22_IT_Gruppe1`.`menu` (`menu_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
    
CREATE TABLE `22_IT_Gruppe1`.`GerichtInBestellung` (
  `bestell_id` INT NOT NULL,
  `gericht_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`bestell_id`, `gericht_id`),
  UNIQUE INDEX `gericht_id_UNIQUE` (`gericht_id` ASC),
  CONSTRAINT `fk_bestell_id_g`
    FOREIGN KEY (`bestell_id`)
    REFERENCES `22_IT_Gruppe1`.`bestellungen` (`bestell_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gericht_id_g`
    FOREIGN KEY (`gericht_id`)
    REFERENCES `22_IT_Gruppe1`.`gericht` (`gericht_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
    
