PGDMP                         z           auth    14.1    14.1     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    24616    auth    DATABASE     h   CREATE DATABASE auth WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE auth;
                postgres    false            ?            1259    24618    users    TABLE     }   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    pass character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    24617    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            \           2604    24621    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?          0    24618    users 
   TABLE DATA           3   COPY public.users (id, username, pass) FROM stdin;
    public          postgres    false    210   
       ?           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 13, true);
          public          postgres    false    209            ^           2606    24625    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?   ?   x?5?Ar?0 ?59k?Āq	????5F;? ??0
???+??Nx??*?\]?????X6?.5?M????3??1????V?Q?҃|?P??a?ĵ???T???ҡ?F&???iN?(???rK>Ua??z?.!??ss??-?K'Ґw?弣??????? ?z???>??xD</??L':?V?{\?0G?B?.
B1     