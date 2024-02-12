import { dollar, exchange, forward } from '../../assets/icons';

interface WalletAction {
  text: string;
  disabled: boolean;
  icon: string;
}

export const walletActions: WalletAction[] = [
  {
    text: 'Отправить',
    disabled: false,
    icon: forward,
  },
  {
    text: 'Купить',
    disabled: true,
    icon: dollar,
  },
  {
    text: 'Обменять',
    disabled: true,
    icon: exchange,
  },
];
