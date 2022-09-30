import React, { Fragment, useState, useEffect } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import PerfectScrollbar from 'react-perfect-scrollbar';

const ToastSuccess = () => (
    <Fragment>
        <div className="toastify-header pb-0">
            <div className="title-wrapper">
                <h6 className="toast-title">Copied To Clipboard !</h6>
            </div>
        </div>
    </Fragment>
);

const Response = ({ link }) => {
    const [copied, setCopied] = useState(false);
    const onCopy = () => {
        setCopied(true);
        toast.success(<ToastSuccess />);
    };

    return (
        <>
            {link != '' && (
                <>
                    <h4 className="mt-5">Response: </h4>
                    <p className="lead fs-6">Response Generated by Api</p>
                    <div
                        className="border border-white py-4 px-3 bg-dark-v2 text-white mb-3"
                        style={{ borderRadius: '10px' }}
                    >
                        <div className="row">
                            <div
                                className="col-11"
                                style={{ height: '250px', overflow: 'hidden' }}
                            >
                                <PerfectScrollbar>
                                    <code className="text-white">
                                        {JSON.stringify(link)}
                                    </code>
                                </PerfectScrollbar>
                            </div>
                            <div className="col-1 text-end">
                                <CopyToClipboard
                                    onCopy={onCopy}
                                    text={JSON.stringify(link)}
                                >
                                    <ContentCopyIcon
                                        fontSize="small"
                                        className="cursor-pointer"
                                    />
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Response;
