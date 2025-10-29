import { SiItchdotio } from "react-icons/si";
export default function ItchIoLink({ url }: { url: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
        >
            <SiItchdotio size={24} color="#FA5C5C" />
            <span>Play on ItchIo</span>
        </a>
    );
}