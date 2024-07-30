CREATE TABLE IF NOT EXISTS "runs" (
	"id" integer PRIMARY KEY NOT NULL,
	"pokemon_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"real_time" integer NOT NULL,
	"game_time" integer NOT NULL,
	"level" integer NOT NULL,
	"resets" integer NOT NULL
);
