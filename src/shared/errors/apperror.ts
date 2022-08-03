class AppError{
  public readonly Data: string;
  public readonly StatusCode: number;

  constructor(Data:string, StatusCode: 400){
    this.Data = Data;
    this.StatusCode = StatusCode;

  }
}

export default AppError;
