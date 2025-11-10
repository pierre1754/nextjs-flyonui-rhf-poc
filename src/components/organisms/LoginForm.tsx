import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import z from "zod";

function useLoginForm() {
  const schema = z.object({
    email: z.email(),
    password: z.string().min(6),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    form,
    schema,
  };
}

export default function LoginForm() {
  const { form, schema } = useLoginForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (
    <div className="w-full flex flex-col flex-grow gap-10 items-center justify-center">
      <h1 className="text-5xl font-bold">LOGIN</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-96">
            <label className="label-text" htmlFor="labelAndHelperText">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className={clsx("input", { "is-invalid": errors.email })}
              id="labelAndHelperText"
            />
            {errors.email && <span className="helper-text">{errors.email.message}</span>}
          </div>

          <div className="w-96">
            <label className="label-text" htmlFor="labelAndHelperTextRight">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={clsx("input", { "is-invalid": errors.password })}
              id="labelAndHelperTextRight"
            />
            {errors.password && <span className="helper-text">{errors.password.message}</span>}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
