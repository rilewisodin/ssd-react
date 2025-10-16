import Button from './Button';

function TermsOfUse() {
    return (
        <div>
            <p>Dicta repudiandae placeat, molestias aperiam eos dolor natus! Voluptatum labore fuga voluptatem sed quibusdam ad ratione in rerum eos, ducimus corporis officia illo distinctio quos quia, unde aperiam, ullam est.</p>
            <div className="accept-decline-container">
                <Button className="accept" text="Accept" color="#05b305" />
                <Button className="accept" text="Decline" color="#b00a0a" />
            </div>
        </div>
    );
}

export default TermsOfUse;
