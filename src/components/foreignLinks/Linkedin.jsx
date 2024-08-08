import Link from 'next/link';
import { BxBxlLinkedin } from './BxBxlLinkedin';

const Linkedin = () => {
	return (
		<div className="rounded-full bg-black p-1">
                <Link href="https://www.linkedin.com/in/victor-fawole/">
					<BxBxlLinkedin />
				</Link>
        </div>
	);
};

export default Linkedin;