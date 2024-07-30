revoke delete on table "public"."notes" from "anon";

revoke insert on table "public"."notes" from "anon";

revoke references on table "public"."notes" from "anon";

revoke select on table "public"."notes" from "anon";

revoke trigger on table "public"."notes" from "anon";

revoke truncate on table "public"."notes" from "anon";

revoke update on table "public"."notes" from "anon";

revoke insert on table "public"."notes" from "authenticated";

revoke references on table "public"."notes" from "authenticated";

revoke select on table "public"."notes" from "authenticated";

revoke trigger on table "public"."notes" from "authenticated";

revoke truncate on table "public"."notes" from "authenticated";

revoke update on table "public"."notes" from "authenticated";

alter table "public"."runs" drop constraint "runs_pkey";

drop index if exists "public"."runs_pkey";

alter table "public"."runs" alter column "id" set default gen_random_uuid();

alter table "public"."runs" alter column "id" drop not null;

alter table "public"."runs" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."runs" alter column "user_id" drop not null;

alter table "public"."runs" alter column "user_id" set data type uuid using "user_id"::uuid;

alter table "public"."runs" add constraint "runs_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."runs" validate constraint "runs_user_id_fkey";


