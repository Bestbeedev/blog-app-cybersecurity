import { useState } from 'react';
import useUserStore from '@/store/user';

const useAuth = () => {
    const { setUser, removeUser } = useUserStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const API_URL = import.meta.env.VITE_API_URL;

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            // Replace with your actual login logic
            const response = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser({
                  id: data.id,
                  token: data.token,
                  username: data.username,
                  email: data.email,
                  role: data.role,
                });
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError((error as Error).message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const signup = async (username: string, email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            // Replace with your actual signup logic
            const response = await fetch(`${API_URL}/api/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser({
                  id: data.id,
                  token: data.token,
                  username: data.username,
                  email: data.email,
                  role: data.role,
                });
            } else {
                setError(data.message || 'Signup failed');
            }
        } catch (error) {
            setError((error as Error).message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        removeUser();
    };

    return {
        login,
        signup,
        logout,
        loading,
        error,
    };
};

export default useAuth;