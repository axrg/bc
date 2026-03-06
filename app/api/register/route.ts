import pool from "@/lib/db";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    await pool.execute(
      "INSERT INTO registrations (name,email) VALUES (?,?)",
      [body.name, body.email]
    );

    return Response.json({
      message: "Registro guardado correctamente"
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      message: "Error en servidor"
    }, { status: 500 });

  }

}