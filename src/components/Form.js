import Button from './Reusables/Button';

const Form = () => {

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <section className="flex flex-col justify-center h-screen items-center">
            <p className="text-xl">RSVP to save your spot!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" name="firstname" id="firstname" required />
                </div>
                <div>
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" name="lastname" id="lastname" required />
                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="lg:flex-row justify-between">
                    <div className="h-auto flex-row justify-center items-center p-0 focus-within:bg-transparent">
                        <input type="radio" id="confirmed" name="rsvp" value="confirmed" />
                        <label className="cursor-pointer" htmlFor="confirmed">I will be there</label>
                    </div>
                    <div className="h-auto flex-row justify-center items-center p-0 focus-within:bg-transparent">
                        <input type="radio" id="declined" name="rsvp" value="declined" />
                        <label className="cursor-pointer" htmlFor="declined">I can't make it</label>
                    </div>
                </div>
                <Button
                    btnText="Submit"
                    btnStyle="btn--small"
                />
            </form>
        </section>
    )
}

export default Form
