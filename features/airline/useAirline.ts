import { CreateSeatTokens, FetchSeatTokens, LoginAirline } from "@/services/airline";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



export function useCreateUser() {
    const queryClient = useQueryClient();
    const { mutate: loginAirlineDetails, isPending: isLoggingIn } = useMutation({
        mutationFn: (userData: any) => LoginAirline(userData)
    });

    return { loginAirlineDetails, isLoggingIn };
}


export function createAirlineSeatToken() {
    const queryClient = useQueryClient();
    const { mutate: createAirlineSeatToken, isPending: isCreatingAirlineSeatToken } = useMutation({
        mutationFn: (airlineSeatTokenData: any) => CreateSeatTokens(airlineSeatTokenData)
    });
    return { createAirlineSeatToken, isCreatingAirlineSeatToken };
}


export function fetchSeatTokens() {
    const queryClient = useQueryClient();

    const { data: seatTokens, isFetching: isFetchingSeatTokens } = useQuery({
        queryKey: ["SeatTokens"],
        queryFn: () => FetchSeatTokens(),
    });

    return { seatTokens, isFetchingSeatTokens };
}