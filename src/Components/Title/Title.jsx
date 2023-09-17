import './Title.css'
const Title = ({subheading, heading }) => {
    return (
        <div className="container mx-auto text-center">
            <span className="sm-title">{subheading}</span>
            <h3 className='text-3xl font-extrabold title'>{heading}</h3>
        </div>
    );
};

export default Title;