import Card from 'react-bootstrap/Card';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { FiPhoneCall } from 'react-icons/fi'


function BannerCards() {
    return (
        <>
            <Card>
                <HiOutlineChatBubbleLeftRight />
                <Card.Body>
                    <Card.Text>
                        Chat with astrologer
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <FiPhoneCall />
                <Card.Body>
                    <Card.Text>
                        Talk to astrologer
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default BannerCards;