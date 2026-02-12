# Back-End Challenge

This is a simple Node/Express server written in TypeScript. It serves as a basic API for a used car listing service. A mock database of 20 cars is provided in `src/db.ts` — you should not need to modify this file.

## Getting Started

```bash
npm install
npm run dev
```

The server will start on `http://localhost:4000`.

## What's Already Working

- `GET /api/health` — Returns a simple health check response.
- `GET /api/cars/:id` — Returns a single car by its ID (e.g. `/api/cars/abc-def-001`). This endpoint is fully functional.

---

## Challenge One — The `getAllCars` function

Take a look at the `getAllCars` function in `src/getCars.ts`. It currently does nothing useful — it just logs the data and returns an empty array.

Your task is to update this function so that:

1. It converts the cars object it receives into an array and returns it.
2. When a search parameter is passed, it filters the results accordingly. It's up to you to decide how the search parameter should work and what it looks like.

If no search is provided, it should return all cars.

> **Tip:** The `DB.getAllCars()` function in `src/db.ts` has a random error that may get in your way while working on this. Feel free to comment it out while you focus on the `getAllCars` function — just remember to put it back when you move on to Challenge Two.

---

## Challenge Two — The endpoint

Now take a look at the `GET /api/cars` endpoint in `src/index.ts`. It currently returns a hardcoded empty array and doesn't use the database at all.

Your task is to:

1. Wire up the endpoint to use the `DB.getAllCars()` function.
2. Extract any relevant parameters from the request and pass them through.
3. Handle errors gracefully — the `DB.getAllCars()` function has a 1 in 5 chance of throwing a `"Connection to database failed"` error. Think about what the API should return when this happens and what status code is appropriate.

---

## Bonus

If you have time, or just want to show a bit more of how you think, consider the following:

- **Keep your code clean and readable.** Use clear naming, consistent formatting, and keep functions focused. Your code should be easy for another developer to pick up and understand.
- **How would you validate that this is working in a production environment?** (eg, tests/logging? How might you approach this in the real world - just add comments in the code)
- **Project structure.** If this API needed to grow to support many more endpoints and features, how would you organise the project? You don't need to implement this — just leave a short comment in the codebase.
- **TypeScript.** The codebase currently uses `any` in a number of places. Could you introduce types or interfaces to make things safer and more self-documenting?
- **Input validation.** What happens if unexpected or invalid query parameters are passed to the endpoint? Is there anything you could do to handle that?
- **Anything else.** If there's something you'd improve or do differently, feel free to go for it or make a note of it. We're interested in how you think, not just what you deliver.

---

## Things to Keep in Mind

- You should not need to modify `src/db.ts`.
- Focus on clean, readable code over getting everything done.
- If you run out of time, leave comments or notes explaining what you would have done next.

## Candidate notes and feedback

Feel free to write up any of your thoughts, feedback or future improvements you would like to do here.
