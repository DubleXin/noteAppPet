import { useParams } from 'react-router-dom';

// function getSearchParams() {
//   return new URLSearchParams(window.location.search);
// }

// export function useQueryParamString(
//   name: string,
//   required: boolean = false
// ): string | null {
//   const param = getSearchParams().get(name);

//   if (required && param === null) {
//     throw new Error(`Query param "${name}" is required`);
//   }

//   return param;
// }

// export function useQueryParamInt(
//   name: string,
//   required: boolean = false
// ): number | null {
//   const param = getSearchParams().get(name);

//   if (param === null) {
//     if (required) {
//       throw new Error(`Query param "${name}" is required`);
//     }
//     return null;
//   }

//   const num = Number(param);
//   if (Number.isNaN(num)) {
//     throw new Error(`Query param "${name}" has to be a number, got "${param}"`);
//   }

//   return num;
// }

export function useRequiredParamAsInt(name: string): number {
  const params = useParams();
  const value = params[name];

  if (!value) {
    throw new Error(`URL param "${name}" is required`);
  }

  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error(`URL param "${name}" has to be a number, got "${value}"`);
  }

  return num;
}
