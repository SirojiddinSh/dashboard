"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = ({ params: { id } }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (!id) return;

        const loadProducts = async () => {
            try {
                const response = await fetch(
                    `https://dummyjson.com/recipes/${id}`,
                    {
                        next: { revalidate: 3600 },
                    }
                );
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadProducts();
    }, [id]);

    if (!id) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center",
                marginTop: "50px",
            }}
        >
            {recipes && (
                <div key={recipes.id}>
                    <Image
                        style={{ borderRadius: "50%" }}
                        src={recipes.image}
                        alt={recipes.name}
                        width={200}
                        height={200}
                    />
                    <h2>{recipes.name}</h2>

                    <p style={{ width: "300px" }}>{recipes.instructions}</p>
                </div>
            )}
        </div>
    );
};

export default Page;
