import Sidebar from "@/components/Sidebar";

const layout = ({ children }) => {
    return (
        <div
            style={{
                maxWidth: "1440px",
                margin: "0 auto",
                display: "flex",
                gap: "50px",
                background: "#E6E3E3",
            }}
        >
            <Sidebar />
            {children}
        </div>
    );
};

export default layout;
