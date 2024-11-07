-- Database: pet

-- DROP DATABASE IF EXISTS pet;

CREATE DATABASE pet
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Table: public.product

-- DROP TABLE IF EXISTS public.product;

CREATE TABLE IF NOT EXISTS public.product
(
    id uuid NOT NULL,
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    count integer,
    price integer,
    saler uuid,
    image text COLLATE pg_catalog."default",
    CONSTRAINT product_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.product
    OWNER to postgres;

-- Table: public.saler

-- DROP TABLE IF EXISTS public.saler;

CREATE TABLE IF NOT EXISTS public.saler
(
    id uuid NOT NULL,
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    CONSTRAINT saler_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.saler
    OWNER to postgres;