CREATE TABLE public.actor (
    actor_id integer DEFAULT nextval('public.actor_actor_id_seq'::regclass) NOT NULL,
    first_name character varying(45) NOT NULL,
    last_name character varying(45) NOT NULL,
    last_update timestamp without time zone DEFAULT now() NOT NULL
);

INSERT INTO actor (actor_id, first_name, last_name, actor_id, last_update)
VALUES ('satu', 'Aliando', 'Syarief', now());

INSERT INTO actor (actor_id, first_name, last_name, actor_id, last_update)
VALUES ('dua', 'Arya', 'Saloka', now());

INSERT INTO actor (actor_id, first_name, last_name, actor_id, last_update)
VALUES ('tiga', 'Ammar', 'Zoni', now());

INSERT INTO actor (actor_id,first_name, last_name, actor_id, last_update)
VALUES ('empat', 'Arbani', 'Yasiz', now());

INSERT INTO actor (actor_id, first_name, last_name, actor_id, last_update)
VALUES ('lima', 'Arnold', 'Leonard', now());