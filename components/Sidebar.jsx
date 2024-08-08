import Image from "next/image";
import Fire from "../images/fire-img.svg";
import Home from "../images/house-img.svg";
import Notification from "../images/notification-img.svg";
import Heart from "../images/heart-img.svg";
import Bag from "../images/bag-img.svg";
import Coupon from "../images/coupon-img.svg";
import Settings from "../images/setting-img.svg";
import Link from "next/link";

const Sidebar = () => {
    return (
        <nav
            style={{
                width: "126px",
                height: "1160px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
                backgroundColor: "#ffffff40",
                border: "1px solid white",
            }}
        >
            <div style={{ width: "50px", height: "50px", marginTop: "52px" }}>
                <Image src={Fire} alt="logo" width={50} height={50} />
            </div>
            <div style={{ marginTop: "70px" }}>
                <ul
                    style={{
                        listStyle: "none",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        alignItems: "center",
                    }}
                >
                    <li>
                        <Link className="active" href="/admin">
                            <Image
                                src={Home}
                                alt="logo"
                                width={22}
                                height={22}
                                style={{
                                    cursor: "pointer",
                                    background: "lightgray",
                                    borderRadius: "50%",
                                    padding: "15px",
                                }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link className="active" href="/admin/notification">
                            <Image
                                src={Notification}
                                alt="logo"
                                width={30}
                                height={30}
                                style={{ cursor: "pointer", padding: "15px" }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link className="active" href="/admin/liked">
                            <Image
                                src={Heart}
                                alt="logo"
                                width={30}
                                height={30}
                                style={{ cursor: "pointer", padding: "15px" }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link className="active" href="/admin/cart">
                            <Image
                                src={Bag}
                                alt="logo"
                                width={30}
                                height={30}
                                style={{ cursor: "pointer", padding: "15px" }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link className="active" href="/admin/coupon">
                            <Image
                                src={Coupon}
                                alt="logo"
                                width={30}
                                height={30}
                                style={{ cursor: "pointer", padding: "15px" }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link className="active" href="/admin/settings">
                            <Image
                                src={Settings}
                                alt="logo"
                                width={30}
                                height={30}
                                style={{ cursor: "pointer", padding: "15px" }}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
