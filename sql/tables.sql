CREATE TABLE IF NOT EXISTS price_plan(
    ID SERIAL PRIMARY KEY,
    plan_name VARCHAR(10) NOT NULL,
    sms_price VARCHAR(10),
    call_price VARCHAR(10)
);
CREATE TABLE IF NOT EXISTS users(
    ID SERIAL PRIMARY KEY,
    username VARCHAR(10) NOT NULL,
    price_plan_id INT,
    FOREIGN KEY(price_plan_id) REFERENCES Price_plan(ID) ON DELETE CASCADE
);

INSERT INTO price_plan (plan_name, sms_price, call_price) VALUES 
('sms100', 0.20, 2.35),
('call100', 0.45, 1.75),
('text-me', 0.17, 1.54)
