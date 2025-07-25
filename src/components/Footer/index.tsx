import metadata from '../../config/metadata';

interface FooterProps {
    nodeSize: number;
    nodeLevel: number;
}
const Footer = ({ nodeSize, nodeLevel }: FooterProps) => {
    return (
        <>
            <footer className='absolute bottom-0 z-[200] h-8 min-w-full bg-white'>
                <div className='mx-auto flex flex-col items-center border-t px-5 py-2 shadow-md sm:flex-row'>
                    <p className='space-x-4 text-sm font-medium'>
                        <span>节点：{nodeSize}</span>
                        <span>层数：{nodeLevel}</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
