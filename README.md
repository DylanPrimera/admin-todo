# Development
Steps to deploy the app in development mode

1. Set up the database
```
docker compose up -d

```

2. Rename the .env.template to .env
3. Replace the environment variables
4. Execute the seed to [generate local data base](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```