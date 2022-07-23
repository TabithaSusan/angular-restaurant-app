insert into Veranstaltung (veranstaltung_id, date, bezeichnung, teilnehmerzahl, mitarbeiter_id) values
(1,'23.05.2023','Geburtstag',53,6),
(2,'30.07.2022','Hochzeit',120,4),
(3,'12.03.2023','Silberhochzeit',28,2),
(4,'24.09.2022','Trauerfeier',45,3),
(5,'01.10.2022','Hochzeit',32,5),
(6,'12.08.2022','Geburtstag',9,1);

insert into menu (menu_name, menu_cost) values
('Kinder',15.0),
('Veggi',40.0),
('Feinwein',70.0),
('Fisch',60.0);

insert into enthaeltGericht (menu_id,gericht_id) values
(1,8),
(2,2),
(3,12),
(4,13);