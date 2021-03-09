
export enum CustomEventName {
  BLUR = 'blur',
  CARD_TYPE = 'cardType',
  CHANGE = 'change',
  FOCUS = 'focus'
}

export enum FieldName {
  NAME = 'name',
  CARD = 'card',
  CVV = 'cvv',
  EXP = 'exp',
}

export type Consumer<T> = (data: T) => void;
export type Callback = () => void;

export interface PaymentCssClassList {
  empty?: string;
  focus?: string;
  invalid?: string;
  valid?: string;
}

export interface ICssStyle {
  [index: string]: string | ICssStyle;
}

export interface ICssStyleList {
  [index: string]: ICssStyle;
}

export interface IField {
  selector: string;
  placeholder?: string;
}

export interface IFields {
  // required fields
  [FieldName.NAME]: IField;
  [FieldName.CARD]: IField;
  [FieldName.EXP]: IField;
  // Optional fields
  [FieldName.CVV]?: IField;
}

// each input field state config.
export interface IStateConfig {
  form?: {
    selector: string;
  };
  fields: IFields;
  classes?: PaymentCssClassList;
  styles?: ICssStyleList;
}

export interface ISessionAuth {
  clientToken: string;
  publicKeyBase64: string;
}

interface IResult {
  error: boolean;
}

export interface IFailureResult extends IResult {
  reason: string;
  error: true;
}

export interface IFieldValidity<F extends FieldName = FieldName> {
  empty: boolean;
  field: F;
  length: number;
  potentiallyValid: boolean;
  touched: boolean;
  valid: boolean;
}

export interface ICardFieldValidity extends IFieldValidity<FieldName.CARD> {
  brand: string;
  brandNiceType: string;
}

export interface ICvvFieldValidity extends IFieldValidity<FieldName.CVV> {
  maxLength: number;
}

export type FormValidity = {
  [F in FieldName]: IFieldValidity<F>;
} & {
  card: ICardFieldValidity;
  cvv: ICvvFieldValidity;
};

export type FieldEventHandlerCallback = Consumer<{ field: string, selector: string } | {
  brand: string;
  brandNiceType: string;
  code: string | {};
  field: FieldName.CARD;
  potentiallyValid: boolean;
  selector: string;
  valid: boolean;
}>;

export interface IPaymentFormHooks {
  preFlowHook: Consumer<Consumer<ISessionAuth>>;
}

export interface IPaymentForm {
  onSubmit(resolve: any, reject?: Consumer<Error>): void;
  createFields(resolve: Callback, reject?: Consumer<Error>): void;
  reset(resolve: Callback, reject?: Consumer<Error>): void;
  destroyFields(resolve: Callback, reject?: Consumer<Error>): void;
  validate(resolve: Callback, reject?: Consumer<Error>): void;
  authenticate(resolve: Consumer<ISessionAuth>, reject?: Consumer<Error>): void;
  submit(auth: ISessionAuth, resolve: Consumer<string>, reject?: Consumer<Error>): void;
  isSupported(): boolean;
  isValid(): boolean;
  getState(cb: Consumer<FormValidity>): void;
  on(type: CustomEventName, callback: FieldEventHandlerCallback): void;
}


