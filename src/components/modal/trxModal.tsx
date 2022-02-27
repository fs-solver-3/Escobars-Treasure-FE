import { trxExplorerBaseUrl } from "../../utils/constants";

interface Props {
  modalTitle: string;
  modalSubtitle: string;
  trxHash: string;
}
export const TrxModal = (props: Props) => {
  const { modalTitle, modalSubtitle, trxHash } = props;
  return (
    <div className="modal-body">
      <div className="wallet-image-field">
        <p className="wallet-title">{modalTitle}</p>
      </div>
      <div className="wallet-text">{modalSubtitle}</div>
      {trxHash && (
        <div className="view-link">
          <a
            href={trxExplorerBaseUrl + trxHash}
            target="_blank"
            rel="noreferrer"
          >
            View transaction
          </a>
        </div>
      )}
    </div>
  );
};
