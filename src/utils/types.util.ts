namespace TypesUtil {
  /**
   * We can use this utility to generate a type that represents the first parameter
   * of each method in an interface.
   *
   * @example
   * ```ts
   * interface MyInterface {
   *    method1(params: { name }: { name: string }): void;
   * }
   *
   * type MyInterfaceFirstParams = InterfaceMethodsFirstParams<MyInterface>;
   *
   * const myInterfaceFirstParams: MyInterfaceFirstParams['method1'] = {
   *  name: 'John Doe',
   * };
   *
   * ```
   */
  export type InterfaceMethodsFirstParams<Interface> = {
    [MethodName in keyof Interface]: Interface[MethodName] extends MethodType
      ? FirstMethodParam<Interface[MethodName]>
      : never;
  };
}

type MethodType = (...args: any) => any;

type MethodParams<Method extends MethodType> = Parameters<Method>;

type FirstMethodParam<Method extends MethodType> = MethodParams<Method>[0];
