"use client";
import Image from 'next/image';

const SolutionsSection = () => {
    return (
        
        <div className="flex w-full flex-wrap items-start justify-between ">


            <div>
                <p className="w-[275px] text-base font-bold">
                    Lorem ipsum dol
                </p>
                <p className="mt-4 mb-2 w-[275px] text-sm">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm ">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm ">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm ">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm ">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm ">
                    Lorem ipsum dol
                </p>
            </div>


            <div className="sm:mt-9">
                <p className="w-[275px] text-base font-bold">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm">
                    Lorem ipsum dol
                </p>
                <p className="mb-3 w-[275px] text-sm">
                    Lorem ipsum dol
                </p>
            </div>

            <div className="sm:mt-9">
                <p className="w-[275px] text-base font-bold">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm">
                    Lorem ipsum dol
                </p>

            </div>

            <div className="sm:mt-9">
                <p className="w-[275px] text-base font-bold">
                    Lorem ipsum dol
                </p>
                <p className="mb-2 w-[275px] text-sm">
                    Lorem ipsum dol
                </p>

            </div>

            
            <div className="flex flex-col items-center gap-y-4 sm:items-end">
                <Image
                    src='/img/logo_certificado_biomob.png'
                    alt="Logo do site certificado pela Biomob."
                    title="Logo do site certificado pela Biomob."
                    width={112}
                    height={112}
                    className="h-28 w-28"
                />

            </div>
        </div>
    );
};

export default SolutionsSection;