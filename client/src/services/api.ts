/** DO NOT MODIFY (except where instructed) */

const API_BASE = "http://localhost:4000/api";

export const fetchCarById = async (id: string): Promise<any> => {
  // Simulates an intermittent network failure — 1 in 5 chance of throwing
  // Comment this out while working on the CarCard component if it gets in the way
  // But remember to put it back when working on error handling
  if (Math.random() < 0.2) {
    throw new Error("Network error: Failed to fetch");
  }

  const response = await fetch(`${API_BASE}/cars/${id}`);

  if (!response.ok) {
    throw new Error(`Car not found (status: ${response.status})`);
  }

  return response.json();
};
