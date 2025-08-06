import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRole = () => {
    const { user, loading } = useAuth();
    const [role, setRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!loading && user?.email) {
            fetch(`https://smart-farming-server.vercel.app/users/role/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role); // expected: 'admin', 'seller', or 'user'
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Role fetch error:", err);
                    setIsLoading(false);
                });
        }
    }, [user, loading]);

    return [role, isLoading];
};

export default useRole;
