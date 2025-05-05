/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/flyswap_program.json`.
 */
export type FlyswapProgram = {
    "address": "EkwZGxeTUfUhHhVATjXt48yus7RQM7qPayBAyGVHJk9d",
    "metadata": {
        "name": "flyswapProgram",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "buySeat",
            "discriminator": [
                225,
                111,
                238,
                154,
                123,
                74,
                43,
                234
            ],
            "accounts": [
                {
                    "name": "buyer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "buyerTokenAccount",
                    "writable": true
                },
                {
                    "name": "seat",
                    "writable": true
                },
                {
                    "name": "collection",
                    "writable": true,
                    "optional": true
                },
                {
                    "name": "asset",
                    "docs": [
                        "CHECK - check assets"
                    ],
                    "writable": true
                },
                {
                    "name": "seller",
                    "writable": true
                },
                {
                    "name": "mint"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "mplCoreProgram",
                    "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
                },
                {
                    "name": "tokenProgram"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "mintSeat",
            "discriminator": [
                174,
                36,
                106,
                250,
                202,
                238,
                71,
                231
            ],
            "accounts": [
                {
                    "name": "signer",
                    "signer": true
                },
                {
                    "name": "payer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "seat",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    115,
                                    101,
                                    97,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "payer"
                            }
                        ]
                    }
                },
                {
                    "name": "updateAuthority",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "collection",
                    "writable": true,
                    "optional": true
                },
                {
                    "name": "asset",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "mplCoreProgram",
                    "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "seatNumber",
                    "type": "u8"
                },
                {
                    "name": "reservationTime",
                    "type": "i64"
                },
                {
                    "name": "departureTime",
                    "type": "i64"
                },
                {
                    "name": "arrivalTime",
                    "type": "i64"
                },
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "uri",
                    "type": "string"
                }
            ]
        },
        {
            "name": "redeemSeat",
            "discriminator": [
                197,
                134,
                54,
                53,
                245,
                164,
                113,
                159
            ],
            "accounts": [
                {
                    "name": "redeemer",
                    "signer": true
                },
                {
                    "name": "seat",
                    "writable": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "baseCollectionV1",
            "discriminator": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        {
            "name": "seat",
            "discriminator": [
                90,
                228,
                22,
                90,
                162,
                86,
                173,
                26
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "invalidSeed",
            "msg": "The provided seed is invalid."
        },
        {
            "code": 6001,
            "name": "invalidBump",
            "msg": "The provided bump is invalid."
        },
        {
            "code": 6002,
            "name": "invalidMint",
            "msg": "The provided mint is invalid."
        },
        {
            "code": 6003,
            "name": "invalidTokenAccount",
            "msg": "The provided token account is invalid."
        },
        {
            "code": 6004,
            "name": "invalidAuthority",
            "msg": "The provided authority is invalid."
        },
        {
            "code": 6005,
            "name": "invalidAmount",
            "msg": "The provided amount is invalid."
        },
        {
            "code": 6006,
            "name": "seatAlreadyBooked",
            "msg": "This seat is already booked."
        },
        {
            "code": 6007,
            "name": "alreadyCheckedIn",
            "msg": "The seat is already checked in."
        },
        {
            "code": 6008,
            "name": "checkInWindowClosed",
            "msg": "The check-in window is closed."
        },
        {
            "code": 6009,
            "name": "invalidCollection",
            "msg": "The provided collection is invalid."
        },
        {
            "code": 6010,
            "name": "unauthorizedRedemption",
            "msg": "This Authority is not the owner of the seat."
        }
    ],
    "types": [
        {
            "name": "baseCollectionV1",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "key",
                        "type": {
                            "defined": {
                                "name": "key"
                            }
                        }
                    },
                    {
                        "name": "updateAuthority",
                        "type": "pubkey"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "name": "numMinted",
                        "type": "u32"
                    },
                    {
                        "name": "currentSize",
                        "type": "u32"
                    }
                ]
            }
        },
        {
            "name": "key",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "uninitialized"
                    },
                    {
                        "name": "assetV1"
                    },
                    {
                        "name": "hashedAssetV1"
                    },
                    {
                        "name": "pluginHeaderV1"
                    },
                    {
                        "name": "pluginRegistryV1"
                    },
                    {
                        "name": "collectionV1"
                    }
                ]
            }
        },
        {
            "name": "seat",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "owner",
                        "type": "pubkey"
                    },
                    {
                        "name": "seatNumber",
                        "type": "u8"
                    },
                    {
                        "name": "isOccupied",
                        "type": "bool"
                    },
                    {
                        "name": "reservationTime",
                        "type": "i64"
                    },
                    {
                        "name": "departureTime",
                        "type": "i64"
                    },
                    {
                        "name": "arrivalTime",
                        "type": "i64"
                    },
                    {
                        "name": "isUsed",
                        "type": "bool"
                    },
                    {
                        "name": "checkedIn",
                        "type": "bool"
                    },
                    {
                        "name": "checkedInTime",
                        "type": {
                            "option": "i64"
                        }
                    }
                ]
            }
        }
    ]
};
