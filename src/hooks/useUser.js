import { useState } from "react";
import {
    getMeApi,
    //getUsersApi,
    //addUserApi,
    //updateUserApi,
    //deleteUserApi,
} from "../api/user";
import { useAuth } from ".";

export function useUser() {

    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    };

    return {
        getMe,
    }
}