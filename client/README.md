# Front-End Challenge

This is a simple React + TypeScript application built with Vite. It connects to a back-end API that serves used car data.

## Getting Started

You'll need the server running before starting this challenge.

### Start the server

```bash
cd server
npm install
npm run dev
```

The server will start on `http://localhost:4000`.

### Start the client

```bash
cd client
npm install
npm run dev
```

The client will start on `http://localhost:5173`.

## What's Already Set Up

- An input and search button in `src/App.tsx` for entering a car ID.
- An API service in `src/services/api.ts` that calls `GET /api/cars/:id` on the server.
- A state variable for the car data is already declared in `App.tsx`.

The server has 20 cars with IDs from `abc-def-001` to `abc-def-020`. The `GET /api/cars/:id` endpoint is fully functional.

---

## Challenge One — The `CarCard` component

Display the returned car object in a card style. 

You can use this mock object to display the card initially. 

```
{
    make: "Ford",
    model: "Focus",
    age: 2019,
    mileage: 45000,
    colour: "Blue",
    description: "Well-maintained family hatchback with full service history.",
    cost: 8500,
    fuelType: "petrol",
    damage: null,
}
```

Your task is to display the car's details in a clear and presentable way. The car object has the following properties:

`id`, `make`, `model`, `age`, `mileage`, `colour`, `description`, `cost`, `fuelType`, `damage`

It's up to you how you choose to lay this out and style it.

---

## Challenge Two — Wiring it up

The `handleSearch` function is empty. Your task is to:

1. Call `fetchCarById` with the entered car ID and update the component state with the result.
2. Handle the loading state — the user should have some indication that a request is in progress.
3. Handle errors — the `fetchCarById` function in `src/services/api.ts` has a 1 in 5 chance of throwing a `"Network error: Failed to fetch"` error. The user should see a meaningful message when this happens, not a blank screen or a crash.
4. Handle the case where a car is not found.

---

## Bonus

If you have time, or just want to show a bit more of how you think, consider the following:

- **Keep your code clean and readable.** Use clear naming, consistent formatting, and keep components focused. Your code should be easy for another developer to pick up and understand.
- **Styling.** Make the card and the page look presentable. Nothing fancy — just clean and usable.
- **TypeScript.** The codebase uses `any` in a few places. Could you introduce types or interfaces to make things safer and more self-documenting?
- **Input validation.** What happens if the user searches with an empty input, or something that clearly isn't a valid ID?
- **UX touches.** Think about small details — disabling the button while loading, clearing previous errors, handling edge cases.
- **Project structure.** If this application needed to grow to support many more pages and features, how would you organise the project? You don't need to implement this — just leave a short comment in the codebase.
- **How would you validate that this is working in a production environment?** (e.g. tests, monitoring? How might you approach this in the real world — just add comments in the code)
- **Anything else.** If there's something you'd improve or do differently, feel free to go for it or make a note of it. We're interested in how you think, not just what you deliver.

---

## Things to Keep in Mind

- You should not need to modify `src/services/api.ts`.
- The server must be running for the API calls to work.
- Focus on clean, readable code over getting everything done.
- If you run out of time, leave comments or notes explaining what you would have done next.

## Candidate notes and feedback

Feel free to write up any of your thoughts, feedback or future improvements you would like to do here.
