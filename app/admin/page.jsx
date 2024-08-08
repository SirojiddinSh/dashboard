"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Hand from "../../images/hand-img.png";
import Search from "../../images/search-icon.svg";

import Pizza from "../../images/admin-images/pizza.png";
import Tomato from "../../images/admin-images/tomato.png";
import Tomato2 from "../../images/admin-images/tomato2.png";
import Tomatos from "../../images/admin-images/tomatos.png";

import Barg1 from "../../images/admin-images/barg1.png";
import Barg2 from "../../images/admin-images/barg2.png";
import Barg3 from "../../images/admin-images/barg3.png";
import Barg4 from "../../images/admin-images/barg4.png";

import Lagmon from "../../images/admin-routes_lagmon.png";
import Burger from "../../images/admin-routes_burger.png";
import Juice from "../../images/admin-routes_juice.png";
import Desert from "../../images/admin-routes_desert.png";

import Plus from "../../images/plus-icon.svg";
import Star1 from "../../images/star1.svg";
import Star2 from "../../images/star2.svg";
import Link from "next/link";

const Page = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/recipes", {
                    next: { revalidate: 3600 },
                });
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error(error);
            }
        };
        loadProducts();
    }, []);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <span key={i} className="star filled">
                        <Image src={Star1} alt="star" width={15} height={15} />
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className="star">
                        <Image src={Star2} alt="star" width={15} height={15} />
                    </span>
                );
            }
        }
        return stars;
    };

    return (
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div
                className="admin_title"
                style={{ display: "flex", gap: "400px" }}
            >
                <div>
                    <h2 className="admin_title_name">
                        Welcome, Ali{" "}
                        <Image src={Hand} alt="hand" width={25} height={25} />
                    </h2>
                    <h4 className="admin_title_text">
                        Discover whatever you need
                    </h4>
                </div>
                <div className="admin_search">
                    <Image
                        style={{
                            width: "12px",
                            height: "12px",
                            marginLeft: "30px",
                        }}
                        src={Search}
                        alt="search"
                    />
                    <input
                        className="admin_search_input"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="admin_content">
                <div className="admin_content_title">
                    <h2>
                        It’s not just Food, it’s an <br /> Experience{" "}
                    </h2>
                    <p>Order Your Favourite food & enjoy your day</p>
                </div>
                <div className="admin_content_images">
                    <Image className="pizza" src={Pizza} alt="pizza" />
                    <Image className="tomato" src={Tomato} alt="tomato" />
                    <Image className="tomato2" src={Tomato2} alt="tomato2" />
                    <Image className="tomatos" src={Tomatos} alt="tomatos" />
                    <Image className="barg1" src={Barg1} alt="barg" />
                    <Image className="barg2" src={Barg2} alt="barg" />
                    <Image className="barg3" src={Barg3} alt="barg" />
                    <Image className="barg4" src={Barg4} alt="barg" />
                </div>
            </div>
            <div className="admin_routes">
                <div>
                    <Image src={Lagmon} alt="lagmon" />
                    <p>Noodles</p>
                </div>
                <div>
                    <Image src={Burger} alt="burger" />
                    <p>Burger</p>
                </div>
                <div>
                    <Image src={Juice} alt="juice" />
                    <p>Drink</p>
                </div>
                <div>
                    <Image src={Desert} alt="desert" />
                    <p>Desert</p>
                </div>
            </div>
            <div className="admin_cards">
                {recipes?.map((recipe) => (
                    <div className="admin-cardss">
                        <div key={recipe.id} className="admin-card-item">
                            <Link href={`/admin/${recipe.id}`}>
                                <Image
                                    className="admin-card-item-img"
                                    width={200}
                                    height={200}
                                    src={recipe.image}
                                    alt="image"
                                />
                            </Link>
                            <div className="admin-card-item-text">
                                <h3>{recipe.name}</h3>
                                <p>
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint.{" "}
                                </p>
                                <span className="stars">
                                    {renderStars(recipe.rating)}
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                            color: "gold",
                                        }}
                                    >
                                        {recipe.rating}
                                    </span>
                                </span>
                                <h4>$ {Math.floor(Math.random() * 100)}</h4>
                                <button>
                                    <Image
                                        width={20}
                                        height={20}
                                        src={Plus}
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
