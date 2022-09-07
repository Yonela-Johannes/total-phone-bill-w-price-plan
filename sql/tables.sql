
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