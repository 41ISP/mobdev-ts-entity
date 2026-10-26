# Игровая полка: React + TypeScript + Strapi

## Запуск
```bash
npm install
cp .env.example .env   # если Strapi не на localhost:1337, поправьте адрес
npm run dev
```

## Strapi: коллекция `game`
| Поле | Тип |
|---|---|
| title | Text, required |
| description | Long text |
| rating | Decimal |
| price | Decimal |
| isFree | Boolean |
| genre | Enumeration: rpg, shooter, strategy, indie, horror |
| platforms | JSON |
| releaseDate | Date |
| cover | Media (single) |

Settings -> Users & Permissions -> Roles -> Public -> Game: включить find, findOne, create, delete.

## Структура
```
src/
  types/game.ts            типы, union-типы, Record, generic StrapiResponse<T>
  api/client.ts            axios.create + разбор ошибок
  api/games.ts             getGames / createGame / deleteGame
  components/GameForm.tsx  форма, setField<K extends keyof GameInput>
  components/GameCard.tsx  карточка
  App.tsx                  состояние, загрузка, ошибки
```
