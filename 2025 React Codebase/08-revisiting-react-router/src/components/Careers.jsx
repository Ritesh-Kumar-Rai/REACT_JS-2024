// Careers.jsx
const Careers = () => (
    <div className="container py-5">
        <h3>Join the Team</h3>
        <div className="list-group mt-4 border-0">
            {['Frontend Developer', 'Product Designer', 'Backend Engineer'].map(job => (
                <div key={job} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 border-bottom py-3">
                    {job} <span className="badge bg-light text-dark border">Remote</span>
                </div>
            ))}
        </div>
    </div>
);

export default Careers;