// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import FlySwapProgramIDL from '../target/idl/flyswap-program.json'
import type { FlyswapProgram } from '../target/types/flyswap-program'

// Re-export the generated IDL and type
export { FlyswapProgram, FlySwapProgramIDL}

// The programId is imported from the program IDL.
export const COUNTER_PROGRAM_ID = new PublicKey(FlySwapProgramIDL.address)

// This is a helper function to get the Counter Anchor program.
export function getFlySwapProgram(provider: AnchorProvider, address?: PublicKey) {
    return new Program({ ...FlySwapProgramIDL, address: address ? address.toBase58() : FlySwapProgramIDL.address } as FlyswapProgram, provider)
}

// This is a helper function to get the program ID for the Counter program depending on the cluster.
export function getFlyswapProgramId(cluster: Cluster) {
    switch (cluster) {
        case 'devnet':
        case 'testnet':
            // This is the program ID for the Counter program on devnet and testnet.
            return new PublicKey('EkwZGxeTUfUhHhVATjXt48yus7RQM7qPayBAyGVHJk9d')
        case 'mainnet-beta':
        default:
            return COUNTER_PROGRAM_ID
    }
}