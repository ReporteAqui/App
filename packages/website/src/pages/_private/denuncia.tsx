import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/denuncia')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/denuncia"!</div>
}
