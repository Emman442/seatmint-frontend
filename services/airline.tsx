import axios from "axios";

export const LoginAirline = async (airlineData: any) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/airline/login`,
    airlineData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export const CreateSeatTokens = async (airlineData: any) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/airline/`,
    airlineData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export const FetchSeatTokens = async () => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/airline/`,

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};
