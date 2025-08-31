const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(8)
                .fill("")
                .map((_, i) => (
                    <div className="res-card shimmer-card" key={i}>
                        <div className="eNZkiz shimmer-img"></div>
                        <div
                            className="restraunt-name shimmer-line"
                            style={{ width: "70%" }}
                        ></div>
                        <div className="sw-restaurant-card-subtext-container">
                            <div
                                className="shimmer-line"
                                style={{ width: "50%", height: "20px" }}
                            ></div>
                        </div>
                        <div
                            className="cusine-names shimmer-line"
                            style={{ width: "90%" }}
                        ></div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;