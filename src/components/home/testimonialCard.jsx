const TestimonialCard = ({ profileUrl, role, name, content }) => {
    return (
        <div className="bg-secondary-dark p-6 pb-15  shadow-md border-b-4 border-primary">


            {/* Profile info */}
            <div className="flex items-center mb-4">
                {profileUrl && (
                    <img
                        src={profileUrl}
                        alt={name}
                        className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                )}
            </div>


            {/* Role badge */}
            <div className="mb-4 text-2xl font-bold text-primary">
                {role}
                {/* <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                    {role}
                </span> */}
            </div>

            {/* Role b */}
            <div className="mb-4 text-2xl font-bold text-neutral-100">
                {name}
                {/* <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                    {role}
                </span> */}
            </div>

            {/* Testimonial content */}
            <div className="text-neutral-100">
                <p className="">{content}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;