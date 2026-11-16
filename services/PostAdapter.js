export class PostAdapter {
  static adapter(itemBackend) {
    return {
      id: itemBackend.id.toString(),
      content: itemBackend.message || "Sin contenido",
      likes: itemBackend.likes_count || 0,
      categoryId: itemBackend.id_category || 1,
      userId: itemBackend.id_user,
      fechaCreacion: itemBackend.create_at
        ? new Date(itemBackend.create_at).toLocaleDateString
        : "Reciente",
    };
  }

  /**
   * Si la API te devuelve una lista completa, la adaptamos en lote
   */
  static adapterList(listBacked) {
    return listBacked.map((item) => PostAdapter.adapter((item = item)));
  }
}
