--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-08-27 09:39:29

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16396)
-- Name: tb01; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb01 (
    id integer NOT NULL,
    col_texto text,
    col_dt timestamp without time zone
);


ALTER TABLE public.tb01 OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16395)
-- Name: tb01_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb01_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tb01_id_seq OWNER TO postgres;

--
-- TOC entry 4840 (class 0 OID 0)
-- Dependencies: 215
-- Name: tb01_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb01_id_seq OWNED BY public.tb01.id;


--
-- TOC entry 4687 (class 2604 OID 16399)
-- Name: tb01 id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb01 ALTER COLUMN id SET DEFAULT nextval('public.tb01_id_seq'::regclass);


--
-- TOC entry 4834 (class 0 OID 16396)
-- Dependencies: 216
-- Data for Name: tb01; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb01 (id, col_texto, col_dt) FROM stdin;
\.


--
-- TOC entry 4841 (class 0 OID 0)
-- Dependencies: 215
-- Name: tb01_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb01_id_seq', 1, false);


--
-- TOC entry 4689 (class 2606 OID 16403)
-- Name: tb01 tb01_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb01
    ADD CONSTRAINT tb01_pkey PRIMARY KEY (id);


-- Completed on 2024-08-27 09:39:29

--
-- PostgreSQL database dump complete
--

